import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="services">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Nossos serviços</h3>
                            <h1 className="display-6 text-center mb-4">Por que escolher a plataforma Virtually?</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-check-square-o fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Resultado rápido</h5>
                                    <p class="card-text lead">faça a autoavaliação e descubra como está se sentindo.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Procure o que desejar</h5>
                                    <p class="card-text lead">Oferemos terapia com sessões em áudio, vídeos, meditação, texto motivador.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Experiência com usuário</h5>
                                    <p class="card-text lead">Priorizamos nossa relação com nossos usuários, se ele tem um problema, nós também tem</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-hand-paper-o fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Conteúdos selecionados a mão</h5>
                                    <p class="card-text lead">Os conteúdos que vão desde os vídeos, imagens mais básicos até sessões de terapia. com o intuito de aliviar casos moderados de ansiedades</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-money fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Preços baixos e acessíveis para todos.</h5>
                                    <p class="card-text lead">Devido as condições e os altos valores cobrados, poucos recebem o cuidado adequado de saúde mental. Oferecemos preços baixos e acessíveis para todos.</p>
                                    {/*butn <a href="#" class="btn btn-primary">Go somewhere</a> */} 
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">
                                <div class="card-body text-center">
                                    <i className="fa fa-spinner fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Projetos futuros</h5>
                                    <p class="card-text lead">Pretendemos implementar opções de, procura consultório e profissionais mais próximos de sua residência. Atendimento Online em nossa plataforma e comunidade para tirar tais dúvidas.</p>
                                    {/*butn <a href="#" class="btn btn-primary">Go somewhere</a> */} 
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;