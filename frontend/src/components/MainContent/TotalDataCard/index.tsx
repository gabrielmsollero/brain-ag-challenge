import Card from '../../UI/Card';

import classes from './TotalDataCard.module.css';

export default function TotalDataCard() {
  return (
    <Card title="Totalization">
      <div className={classes.body}>
        <p>
          <span className={classes.strong}>432</span> farms
        </p>
        <p>
          <span className={classes.strong}>1959.2</span> ha
        </p>
      </div>
    </Card>
  );
}
