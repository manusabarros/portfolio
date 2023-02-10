import { theme } from "@/lib/utils";
import { ColorModeScript } from "@chakra-ui/react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="author" content="Manuel Sabarrós" />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:image"
            content="https://manusabarros.com/assets/profile-picture-192x192.png"
          />
          <meta name="twitter:creator" content="@manusabarros" />

          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Manu Sabarrós" />
          <meta
            property="og:image"
            content="https://manusabarros.com/assets/profile-picture-192x192.png"
          />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-8JJ1MR3NXV"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-8JJ1MR3NXV');
              `,
            }}
          ></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
