import Link from 'next/link';
import Head from 'next/head';

const Layout = ({children, title, desciption}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description"  content={desciption} />
        </Head>
        <div className="container">
            <nav>
                <Link>
                    <a>
                        <span className="main-title">Hacker Next</span>
                    </a>
                </Link>
            </nav>

            {children}
        </div>

        <style jsx>
            {`
            .container {
                max-width: 800px;
                margin: 0 auto;
                backgroud: #f6f6ef;
            }

            nav {
                background: #f60;
                padding: 1em;
            }

            nav > * {
                display: inline-block;
                color: black;
            }

            nav a {
                text-decoration: none;
            }

            nav .main-title {
                font-weight: bold;
            }
            `}
        </style>

        <style global jsx>
            {`
            
            body {
                background: white;
                font-family: Verdena, Geneva, sans-serif;
            }
            `}
        </style>
    </div>
);

export default Layout;

