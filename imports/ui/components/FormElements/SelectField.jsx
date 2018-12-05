/*
   SelectField

 */
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import { dripFormField, FieldPropTypes } from "react-drip-form";
import MuiSelectField from "material-ui/SelectField";

/** ****************************** Import utils and API *************************** */
import defaultProps from "/imports/utils/defaultFieldProps";

export class SelectField extends Component {
  static propTypes = FieldPropTypes;

  handleChange = (e, key, payload) => {
    const { input } = this.props;
    input.onChange(payload);
  };

  render() {
    const {
      input: { onChange, ...input },
      meta,
      children,
      shouldDisplayError,
      ...rest
    } = this.props;

    const displayError = shouldDisplayError(this.props);

    return (
      <MuiSelectField
        {...rest}
        {...input}
        onChange={this.handleChange}
        errorText={displayError ? meta.error : null}
      >
        {children}
      </MuiSelectField>
    );
  }
}

export default dripFormField("select", {
  defaultProps
})(SelectField);
