export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname
    const host = url.hostname

    // Aplica redirecionamento somente para domínios esperados
    if (
      host === "bevgroup.com.br" ||
      host === "www.bevgroup.com.br"
    ) {
      const redirects = {
        "": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/event-night-life-tips-this-is-going-to-extremely/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/enjoyment-outside-relatives-hobbies/": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes",
        "/vinhos?pais=franca": "https://bargenial.com.br/importadora-de-vinhos-e-espumantes"
      }

      // Trata paths com ou sem query string
      const cleanPath = path + (url.search || "")

      if (redirects[cleanPath]) {
        return Response.redirect(redirects[cleanPath], 301)
      }

      // fallback para home
      if (redirects["/"]) {
        return Response.redirect(redirects["/"], 301)
      }
    }

    return new Response("Página não encontrada", { status: 404 })
  }
}