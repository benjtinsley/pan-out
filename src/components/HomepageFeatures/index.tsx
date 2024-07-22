import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Pitch Your Idea',
    Svg: require('@site/static/img/hp-pitch.svg').default,
    description: (
      <>
        Have an idea that you think would make a great project? Pitch it to the cohort in a 5 minute presentation.
      </>
    ),
  },
  {
    title: 'Vote for Your Favorites',
    Svg: require('@site/static/img/hp-vote.svg').default,
    description: (
      <>
        Everyone votes on which ideas appeal to them the most. The ideas with enough votes to form a team will group up.
      </>
    ),
  },
  {
    title: 'Build It!',
    Svg: require('@site/static/img/hp-build.svg').default,
    description: (
      <>
        Figure out how to build the thing! Each semester we will check in on your progress with help and support along the way.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
