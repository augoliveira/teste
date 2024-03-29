import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Tentáculo | software para empresas</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />

          <link
            rel="shortcut icon"
            href="images/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css"/>

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/responsive.css" />
          <link rel="stylesheet" href="/css/custom.css" />
          <link rel="stylesheet" href="assets/css/styles.op-business.css"/>
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="/assets/vendor/icon-awesome/css/font-awesome.min.css" />
          <link rel="stylesheet" href="public/icofont/icofont.min.css"/>
          <link rel="stylesheet" href="/public/icofont/css/icofont.css"/>
    
  
  
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery-3.2.1.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.superslides.min.js"></script>
          <script src="/js/bootstrap-select.js"></script>
          <script src="/js/inewsticker.js"></script>
          <script src="/js/bootsnav.js."></script>
          <script src="/js/images-loded.min.js"></script>
          <script src="/js/isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/baguetteBox.min.js"></script>
          <script src="/js/form-validator.min.js"></script>
          <script src="/js/contact-form-script.js"></script>
          <script src="/js/custom.js"></script>
          <script src="/assets/vendor/jquery/jquery.min.js"></script>
          <script src="/assets/js/hs.core.js"></script>
          <script src="/assets/js/hs.core.js"></script>
    

    
  
  <script src="assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
