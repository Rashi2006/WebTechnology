function Layout(){
    return(
        <div className='container'>
            <div className="row">
                <div className="col-2 mx-1 border border-primary">Logo</div>
                <div className="col border border-primary">menu</div>
            </div>
            <div className="row">
                <div className="col-3 max-1 border border-primary">Sidebar</div>
                <div className="col border border-primary">main</div>
            </div>
            <div className="row">
                <div className="col border border-primary">footer</div>
            </div>
        </div>
    );
}

export default Layout;