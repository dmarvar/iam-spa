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
    console.log(pageRequested);
    if (pageRequested === "/signin/confirmation") {
      return (
        <Html>
          <Head />
          <body>
            <h1>
              This is the rigth path for confirmation
              {this.props.__NEXT_DATA__.page}
            </h1>
            <div id="never">Great adventure</div>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
    return (
      <Html>
        <Head />
        <body>
          <h1>
            This is going to be sent in every request{" "}
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

export async function getServerSideProps() {
  return { props: {} };
}

export default MyDocument;

// import React from "react";

// interface Props {}

// const dddddocument = (props: Props) => {
//   return <div></div>;
// };

// export default dddddocument;
