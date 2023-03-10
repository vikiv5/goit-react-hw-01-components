
import {
    Section,
    Title  ,
    ColorsList,
    Color,
    Label,
    Percentage,
    Wrapper,
  } from './Statistics.styled';
  
  import PropTypes from 'prop-types';
  

  export const Statistics = ({ stats, title }) => {
    return (
      <Section>
<Wrapper>
{title &&(<Title>{title}</Title>)}

<ColorsList>
          {stats.map(stat => (
            <Color key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Color>
          ))}
        </ColorsList>
        </Wrapper>
</Section>
 );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    
  };