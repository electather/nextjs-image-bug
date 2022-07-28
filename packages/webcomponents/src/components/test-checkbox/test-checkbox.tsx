import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'test-checkbox',
  styleUrl: 'styles.scss',
  shadow: false,
})
export class TestCheckbox {
  /**
   * Label associated with the field
   */
  @Prop()
  name: string;
  /**
   * The default checked state
   */
  @Prop()
  defaultChecked?: boolean;
  /**
   * The active checked state
   */
  @Prop()
  checked?: boolean;
  /**
   * Name of the field
   */
  @Prop()
  label?: string;
  /**
   * Disabled state of checkbox
   */
  @Prop()
  disabled?: boolean;
  /**
   * underlying input value
   */
  @Prop()
  value?: string;
  /**
   * Emits boolean value of checked state
   */
  @Event()
  checkedChange: EventEmitter;

  inputChange = () => {
    this.checkedChange.emit(!this.checked);
  };

  render() {
    if (!this.name) throw new Error('name prop is required');
    return (
      <Host>
        <input
          type="checkbox"
          id={this.name}
          name={this.name}
          checked={this.checked}
          defaultChecked={this.defaultChecked}
          onChange={this.inputChange}
          disabled={this.disabled}
          value={this.value}
        />
        <label htmlFor={this.name}>{this.label}</label>
      </Host>
    );
  }
}
