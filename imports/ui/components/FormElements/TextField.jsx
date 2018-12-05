/*
   TextField

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiTextField from "material-ui/TextField";

/** ****************************** Import utils and API *************************** */
import defaultProps from "/imports/utils/defaultFieldProps";

export class TextField extends Component {
  renderAmount = () => {
    const { dollar } = this.props;
    if (!dollar) return null;
    return <span className="dollar-in-amount-field">$</span>;
  };

  render() {
    const { input, meta, errorText, shouldDisplayError, ...rest } = this.props;

    let errorData = null;
    const displayError = shouldDisplayError(this.props);

    if (errorText) {
      errorData = errorText;
    } else if (displayError) {
      errorData = meta.error;
    }

    return (
      <div>
        {this.renderAmount()}
        <MuiTextField {...rest} {...input} errorText={errorData} />
      </div>
    );
  }
}

TextField.propTypes = FieldPropTypes;

export default dripFormField("text", {
  defaultProps
})(TextField);
