import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

/* components */
import { connect } from 'react-redux';
import { TopImage } from 'components/TopImage';
import { UserInfo } from 'components/UserInfo';

const metaData = {
  title: 'Dashboard',
  description: 'Welcome to the Dashboard',
};

@connect(
  (state) => ({
    partner: state.auth.partner,
    personal: state.auth
  })
)
export class ChairDashboardHome extends Component {
  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage imgType="generalassembly" header={"Hi " + this.props.firstName + " " + this.props.lastName} subtitle="Welcome to your Dashboard"/>
        <UserInfo {...this.props}/>
      </section>
    );
  }
}