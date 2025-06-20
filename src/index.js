export default {
    async fetch(request) {
      const url = new URL(request.url)
      const path = url.pathname
  
      const redirects = {
        "/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/champagnes": "https://bargenial.com.br/espumantes-premium",
        "/vinhos": "https://bargenial.com.br/melhores-vinhos-importados"
      }
  
      if (redirects[path]) {
        return Response.redirect(redirects[path], 301)
      }
  
      return new Response("Página não encontrada", { status: 404 })
    }
  }
  