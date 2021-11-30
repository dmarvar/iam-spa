import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext as Tctx,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: Tctx) {
    const initialProps = await Document.getInitialProps(ctx);
    console.log(ctx);
    return { ...initialProps };
  }

  render() {
    const pageRequested = this.props.__NEXT_DATA__.page;

    return (
      <Html>
        <Head />
        <body>
          <h1>
            This is goint to be sent in every request{" "}
            {this.props.__NEXT_DATA__.page}
          </h1>
          <div id="never">Great adventure</div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
