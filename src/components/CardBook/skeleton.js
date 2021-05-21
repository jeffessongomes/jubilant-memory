import { Container, Row, Col } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import './styles.scss';

const CardBookSkeleton = () => (
  <Container>
    <Row>
      <Col className="mt-3" lg={12} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <Skeleton className="skeletonPagination" />
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#ECF0F1" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={3} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <div className="skeleton">
            <Skeleton className="skeleton__img" />
            <Skeleton className="skeleton__title" />
            <Skeleton className="skeleton__description" />
            <Skeleton className="skeleton__date" />
          </div>
        </SkeletonTheme>
      </Col>
      <Col lg={12} sm={12}>
        <SkeletonTheme color="#D0D3D4" highlightColor="#A6ACAF">
          <Skeleton className="skeletonPagination" />
        </SkeletonTheme>
      </Col>
    </Row>
  </Container>
);

export default CardBookSkeleton;
