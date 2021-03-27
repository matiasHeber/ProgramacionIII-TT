import React from 'react';
import Category from './Category';
import Card from './Card';

const categorias = ['Autos', 'Motos', 'Bicis', 'Rollers', 'Skates', 'Lanchas'];



function PageContent(params) {
    return (
        <React.Fragment>

				{/* <!-- Begin Page Content --> */}
				<div class="container-fluid">

					{/* <!-- Page Heading --> */}
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					{/* <!-- Content Row --> */}
					<div class="row">

						<Card titulo="Products in data base" numero="135" color="primary" icono="fa-clipboard-list"/>
						<Card titulo="Amount in products" numero="$546.456" color="success" icono="fa-dollar-sign"/>
						<Card titulo="Users quantity" numero="38" color="warning" icono="fa-user-check"/>
						
					</div>

					{/* <!-- Content Row --> */}
					<div class="row">
						{/* <!-- Last Product in DB --> */}
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+"rem"}} src="/images/product_dummy.svg" alt=""/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

						{/* <!-- Categories in DB --> */}
						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div class="card-body">
									<div class="row">
										
										{
											categorias.map((unaCategoria, idx)=>(
												<Category key={idx} nombreCategoria={ unaCategoria} />
											))
										}


									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /.container-fluid --> */}
		

		</React.Fragment>
    );
}


export default PageContent;