import React from 'react';
import { HalfCircularProgressbar, buildStyles } from './components/Widgets/CircleProgress';

import { ExceptionCard } from './components/Widgets/Cards';
import { LineProgressBar } from './components/Widgets/LineProgress';

import classNames from 'classnames';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';

const Example: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="col-12 col-sm-6 col-md-2 mt-4">
    <div className="row">
      <div className="col-6 col-md-12 offset-3 offset-md-0">{children}</div>
    </div>
  </div>
);

function Demo2() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-2">
          <div className="text-left">
            <div className="widget-header">Widgets</div>
          </div>
        </div>
        <div className="col-4" />
        <div className="col-6 text-right">
          <button className="btn btn-primary" type="submit">
            Add widget
          </button>
        </div>
      </div>

      <hr />
      <div className="row mt-5">
        <Example>
          <AnimatedProgressProvider
            valueStart={5}
            valueEnd={72}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <HalfCircularProgressbar
                  value={value}
                  text={`${roundedValue}%`}
                  circleRatio={1}
                  title="ML Automatch %"
                  styles={buildStyles({ rotation: 0, pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </Example>

        <Example>
          <ExceptionCard title1="New Exceptions" title2="Today" content="201"></ExceptionCard>
        </Example>

        <Example>
          <AnimatedProgressProvider
            valueStart={5}
            valueEnd={80}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              const maxValue = 200;
              return (
                <LineProgressBar
                  minValue={0}
                  maxValue={maxValue}
                  value={value}
                  title="ML Automatch"
                  content={`${roundedValue} out of ${maxValue}`}
                  styles={buildStyles({ rotation: 0, pathTransition: 'none' })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </Example>
      </div>

      <hr className="mt-5" />
    </div>
  );
}

export default Demo2;
