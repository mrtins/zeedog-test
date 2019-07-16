import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col
} from 'react-bootstrap';

import disclaimerDog from '../../../img/disclaimer-br-breed.webp';
import returnBtnDog from '../../../img/return-btn-2.webp';

import './styles.css';

export default props => (
  <div className="section-home pt-br">
    <Row>
      <Col>
        <div style={{ marginTop: '60px' }}>
          <img src={disclaimerDog} alt="Cães da mesma raça podem usar tamanhos diferentes. Pense nisso!" width="250px" />
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
              <img src={returnBtnDog} alt="Escolher outra raça" width="50%" />
            </button>
          </Link>
        </div>
      </Col>
    </Row>

    <Row>
      <div className="table-dog">
        <div style={{ marginTop: '40px', marginBottom: '60px' }}>
          <Row>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Guia</span>
                  </Col>
                  <Col>
                    <span className="suggested-size">{props.breed.leash[0]}</span>
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
                    <span className="suggested-size">{props.breed.stepin[0]}</span>
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
                    <span className="suggested-size">{props.breed.soft_walk[0]}</span>
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
                    <span className="suggested-size">{props.breed.obedience[0]}</span>
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
                    <span className="suggested-size">{props.breed.leash_ruff[0]}</span>
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
                    <span className="suggested-size">{props.breed.meshplus[0]}</span>
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