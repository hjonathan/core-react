import { EVENTS } from "../utils/consts.js"
import { useState, useEffect, Children } from "react"
import { match } from "path-to-regexp"
import { getCurrentPath } from "../utils/getCurrentPath.js"

export function Router({
    children,
    routes = [],
    defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath())

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(getCurrentPath())
        }

        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    }, [])

    let routeParams = {}

    const Page = routes.find((element) => {

        const callbackObj =(a,c)=>{
          if (a === c) return true
  
          const matcherUrl = match(a, { decode: decodeURIComponent })
          const matched = matcherUrl(c)
  
          if (!matched) return false
  
          routeParams = matched.params
  
          return true
        }   

        const res = findObj(element , currentPath, callbackObj)

        return res


        // if (path === currentPath) return true

        // // hemos usado path-to-regexp
        // // para poder detectar rutas dinámicas como por ejemplo
        // // /search/:query <- :query es una ruta dinámica
        // const matcherUrl = match(path, { decode: decodeURIComponent })
        // const matched = matcherUrl(currentPath)
        // if (!matched) return false

        // // guardar los parámetros de la url que eran dinámicos
        // // y que hemos extraído con path-to-regexp
        // // por ejemplo, si la ruta es /search/:query
        // // y la url es /search/javascript
        // // matched.params.query === 'javascript'
        // routeParams = matched.params
        // return true
    })

    return Page && Page.Component ? (
        <Page.Component
            routeParams={routeParams}
            childrenRoutes={Page.children}
        />
    ) : (
        <DefaultComponent routeParams={routeParams} />
    )
}

function findObj(objeto, path, callback) {
  if (callback(objeto.path,path)) {
    return objeto;
  }

  if (objeto.children) {
    for (let child of objeto.children) {
      const resultado = findObj(child, path, callback);
      if (resultado) {
        return resultado;
      }
    }
  }

  return null;
}
