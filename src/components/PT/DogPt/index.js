import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col
} from 'react-bootstrap';

import disclaimerDogPt from '../../../img/disclaimer-br-breed.webp';
import returnBtnDogPt from '../../../img/return-btn-2.webp';

export default props => (
  <div className="section-home pt-br">
    {console.log(props)}
    <Row>
      <Col>
        <div style={{ marginTop: '60px' }}>
          <img src={disclaimerDogPt} alt="Cães da mesma raça podem usar tamanhos diferentes. Pense nisso!" width="250px" />
        </div>
      </Col>

      <Col>
        <div>
          <h3 className="title">{props.breed.pt_name}</h3>
          <p className="subtitle">Ou porte parecido</p>
          <img src={props.breed.image} alt={props.breed.pt_name} width="400px" />
        </div>
      </Col>

      <Col>
        <div>
          <Link to="/selection/pt-br" className="return-btn-selection">
            <button className="btn">
              <img src={returnBtnDogPt} alt="Escolher outra raça" width="50%" />
            </button>
          </Link>
        </div>
      </Col>
    </Row>

    <Row>
      <div className="table-dog table-bg-pt">
        <div style={{ marginTop: '40px', marginBottom: '60px' }}>
          <Row>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Guia</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-pt">{props.breed.leash[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Coleira</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-pt">{props.breed.stepin[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Guia com amortecedor</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-pt">{props.breed.soft_walk[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Coleira de obediência</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-pt">{props.breed.obedience[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Peitoral</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-pt">{props.breed.leash_ruff[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Peitoral com mesh-plus</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-pt">{props.breed.meshplus[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  </div>
)