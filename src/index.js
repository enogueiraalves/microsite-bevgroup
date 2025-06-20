export default {
    async fetch(request) {
      const url = new URL(request.url)
      const path = url.pathname
  
      const redirects = {
        "/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/event-night-life-tips-this-is-going-to-extremely/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/enjoyment-outside-relatives-hobbies/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/vinhos?pais=franca": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
      }
  
      if (redirects[path]) {
        return Response.redirect(redirects[path], 301)
      }
  
      return new Response("Página não encontrada", { status: 404 })
    }
  }
  