import { expect } from 'chai';
import style from '../../../app/components/Footer.css';


describe('todoapp Footer component', () => {
  xit('should render correctly', () => {
    const { output } = { output: {} }; // stub
    expect(output.type).to.equal('footer');
    expect(output.props.className).to.equal(style.footer);
  });
});
