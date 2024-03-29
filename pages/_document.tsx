import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<link rel='preaload' href='https://fonts.googleapis.com' />
					<link rel='icon' href='/assets/logo.svg' />
					<link
						rel='preaload'
						href='https://fonts.gstatic.com'
						crossOrigin=''
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
