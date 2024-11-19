import React from 'react';
import AllAboutOneMovie from "@/app/components/allAboutOneMovie/AllAboutOneMovie";


type Params = { id: string }
const PageWithGenres = async ({params}: { params: Params }) => {

    const {id} = await params;
    console.log(id)
    return (
        <main>
            <section className={'mainBoxWithImg'}>
                <AllAboutOneMovie key={id} id={id}/>
            </section>
        </main>
    );
};

export default PageWithGenres;