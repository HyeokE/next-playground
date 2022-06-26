import Head from 'next/head';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';



const Container = ({ children }:{children: ReactNode}) => {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>

            <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white dark:bg-zinc-900">

                <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
                    {children}
                </main>
            </section>
        </>
    );
};

export default Container;
