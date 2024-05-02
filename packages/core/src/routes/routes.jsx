import defaultRoutes from "./default"
import Modules from "../register"

const loadRoutes = () => {
    const keys = Object.keys(Modules)

    let routes = []

    keys.forEach((e) => {
        routes = routes.concat(Modules[e]?.routes)
    })

    routes = defaultRoutes.concat(routes)

    routes.forEach((e) => {
        !e.parent ? e.parent = null : null         
    })
    
    return agruparPorPadre(routes)    
}

function agruparPorPadre(objetos, parentId = null) {

    const hijos = objetos.filter(objeto => objeto.parent === parentId);
  
    hijos.forEach(hijo => {
      const nietos = agruparPorPadre(objetos, hijo.path);
      if (nietos.length > 0) {
        hijo.children = nietos;
      }
    });
  
    return hijos;
  }

export const routes = loadRoutes()
