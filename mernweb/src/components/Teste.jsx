/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

const Teste = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="two-thirds column">
                    <h2>Teste o seu grau de ansiedade.</h2>
                    <h5>Este teste anônimo tem caráter informativo e vai ajudar você a entender melhor a sua saúde mental. No entanto, não serve como diagnóstico médico.</h5>
                    <div id="progress_bar" />
                    <form className="questions_box">
                        <div id="question-1">
                            <h3> Questão 1 </h3>
                            <h4> Sentimento de preocupação com diversas coisas? </h4>
                            <input id="question-1-answer-a" type="radio" name="favelang" defaultValue={1} /> Nunca. <br />
                            <input id="question-1-answer-b" type="radio" name="favelang" defaultValue={2} /> Alguns dias. <br />
                            <input id="question-1-answer-c" type="radio" name="favelang" defaultValue={3} /> Quase todos os dias. <br />
                            <div id="submit1" className="button">Enviar Resposta</div>
                            <div className="clearfix" />
                        </div>
                        <div id="question-2">
                            <h3> Questão 2 </h3>
                            <h4> Tem dificuldade em relaxar? </h4>
                            <input id="question-2-answer-a" type="radio" name="favelang" defaultValue={1} /> Nunca. <br />
                            <input id="question-2-answer-b" type="radio" name="favelang" defaultValue={2} /> Alguns dias. <br />
                            <input id="question-2-answer-c" type="radio" name="favelang" defaultValue={3} /> Quase todos os dias. <br />
                            <div id="submit2" className="button">Enviar Resposta</div>
                            <div className="clearfix" />
                        </div>
                        <div id="question-3">
                            <h3> Questão 3 </h3>
                            <h4> Fica facilmente aborrecido ou irritado? </h4>
                            <input id="question-3-answer-a" type="radio" name="favelang" defaultValue={1} /> Nunca. <br />
                            <input id="question-3-answer-b" type="radio" name="favelang" defaultValue={2} /> Alguns dias. <br />
                            <input id="question-3-answer-c" type="radio" name="favelang" defaultValue={3} /> Quase todos os dias. <br />
                            <div id="submit3" className="button">Enviar Resposta</div>
                            <div className="clearfix" />
                        </div>
                        <div id="question-4">
                            <h3>Questão 4</h3>
                            <h4> Sentiu medo, como se algo horrível fosse acontecer? </h4>
                            <input id="question-1-answer-a" type="radio" name="favelang" defaultValue={1} /> Nunca. <br />
                            <input id="question-1-answer-b" type="radio" name="favelang" defaultValue={2} /> Alguns dias. <br />
                            <input id="question-1-answer-c" type="radio" name="favelang" defaultValue={3} /> Quase todos os dias. <br />
                            <div id="submit4" className="button">Enviar Resposta</div>
                            <div className="clearfix" />
                        </div>
                        <div id="question-5">
                            <h3> Questão 5 </h3>
                            <h4> Se sentiu ansioso/a ou tenso/a? </h4>
                            <input id="question-1-answer-a" type="radio" name="favelang" defaultValue={1} /> Nunca. <br />
                            <input id="question-1-answer-b" type="radio" name="favelang" defaultValue={2} /> Alguns dias. <br />
                            <input id="question-1-answer-c" type="radio" name="favelang" defaultValue={3} /> Quase todos os dias. <br />
                            <div id="submit5" className="button">Enviar Resposta</div>
                            <div className="clearfix" />
                        </div>
                        <div id="question-6">
                            <h3> Obrigado por responder a pesquisa! </h3>
                            <h4> Seu grau de ansiedade é: </h4>
                            <h2 id="printtotalscore" />
                            <p id="printscoreinfo" />
                        </div>
                    </form>
                </div>
            </div>
            
        </div>      
    );     
}

export default Teste;