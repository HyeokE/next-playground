import Container from './Container'
import {DetailPostDataType} from "../pages/api";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from './markdown-styles.module.scss'

function BlogLayout({ post }:{post: DetailPostDataType}) {
    return (
        <Container>
            <div >
                <ReactMarkdown
                    children={post.content}
                    remarkPlugins={[remarkGfm]}
                    className={style.markdown}
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return inline ? (
                                // 강조
                                <code
                                    style={{
                                        background: '#E3F2FD',
                                        color:'#3886f6',
                                        padding: '0.4rem 0.5rem',
                                        borderRadius: '0.4rem',
                                        fontSize: '1.4rem',
                                    }}
                                    {...props}
                                >
                                    {children}
                                </code>
                            ) : match ? (
                                // 코드
                                // 언어가 선택됨
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    language={match[1]}
                                />
                            ) : (
                                // 언어가 선택되지 않음
                                <SyntaxHighlighter
                                    children={String(children).replace(/\n$/, "")}
                                    language="textile"
                                />
                            );
                        }
                    }}
                />
            </div>
        </Container>
    )
}

export default BlogLayout
