import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { ResolutionSubmit } from 'components/ResolutionSubmit';
import { ResolutionTables } from 'components/ResolutionTables';

import * as actionCreators from 'actions/resolutions';

import { Socket } from 'components/Socket';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* material UI components */
import { Card } from 'react-toolbox/lib/card';

/* container styles */
import { styles } from './styles/styles.scss';

const metaData = {
  title: 'Resolutions',
  description: 'View Resolutions here',
};

@connect(
  (state) => ({
    token: state.auth.token,
    userLevel: state.auth.userLevel,
    resolutions: state.resolutions.items,
    admins: state.auth.admins,
    country: state.auth.country,
    committee: state.auth.committee
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Resolutions extends Component {
  render() {

    const dataType = this.props.committee === "Security Council" ? "Clauses" : "Resolutions";

    return (
      <section className={styles}>
        <DocumentMeta {...metaData} />
        <Socket {...this.props} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                View {dataType}
              </h1>
            </div>

            <Card className="card">
              <div className="col-lg-6">
              <ResolutionTables dataType={dataType} {...this.props}/>
              
              { this.props.userLevel == "Delegate" && <ResolutionSubmit dataType={dataType.slice(0, -1)} {...this.props}/> }
              </div>
            </Card>

          </div>
        </div>
      </section>
    );
  }
}
