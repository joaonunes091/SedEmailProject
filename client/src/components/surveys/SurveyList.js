import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">Sent On: {new Date(survey.dateSent).toLocaleDateString("pt-PT")}{ }</p>
                    </div>
                    <div className="card-action">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>Yes: {survey.yes}</a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);