import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col
} from 'react-bootstrap';

import disclaimerDogEn from '../../../img/disclaimer-en-breed.webp';
import returnBtnDogPt from '../../../img/return-btn-2-en.webp';

export default props => (
  <div className="section-home en">
    <Row>
      <Col>
        <div style={{ marginTop: '60px' }}>
          <img src={disclaimerDogEn} alt="Dogs of the same breed may vary in size. Consider that!" width="250px" />
        </div>
      </Col>

      <Col>
        <div>
          <h3 className="title">{props.breed.en_name}</h3>
          <p className="subtitle">Or similar size</p>
          <img src={props.breed.image} alt={props.breed.en_name} width="400px" />
        </div>
      </Col>

      <Col>
        <div>
          <Link to="/selection/en" className="return-btn-selection">
            <button className="btn">
              <img src={returnBtnDogPt} alt="Choose another breed" width="50%" />
            </button>
          </Link>
        </div>
      </Col>
    </Row>

    <Row>
      <div className="table-dog table-bg-en">
        <div style={{ marginTop: '40px', marginBottom: '60px' }}>
          <Row>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Leash</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-en">{props.breed.leash[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Collar</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-en">{props.breed.stepin[0]}</span>
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
                    <span className="label">Shock absorbent leash</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-en">{props.breed.soft_walk[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Obedience collar</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-en">{props.breed.obedience[0]}</span>
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
                    <span className="label">Harness</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-en">{props.breed.leash_ruff[0]}</span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row>
                  <Col>
                    <span className="label">Mesh plus harness</span>
                  </Col>
                  <Col>
                    <span className="suggested-size size-en">{props.breed.meshplus[0]}</span>
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