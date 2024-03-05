function Layout({children}:{children:React.ReactNode}) {
    return ( <div>
            <h1>레이아웃입니다.</h1>
            {children}
    </div> );
}

export default Layout;