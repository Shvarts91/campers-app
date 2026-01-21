import { fetchCar } from '@/lib/api/queries';
import styles from './pageDetails.module.css';
import FormRegister from '@/components/FormRegister/FormRegister';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailsPage({ params }: PageProps) {
  const iconFeaturesMap = {
    ac: 'icon-wind',
    automatic: 'icon-diagram',
    kitchen: 'icon-cup-hot',
    tv: 'icon-tv',
    bathroom: 'icon-ph_shower',
    petrol: 'icon-fuel-pump',
    radio: 'icon-ui-radios',
    water: 'icon-water',
    fridge: 'icon-fridge',
    microwave: 'icon-microwave',
  } as const;

  type FeatureKey = keyof typeof iconFeaturesMap;

  const features = Object.entries(iconFeaturesMap) as [FeatureKey, string][];

  const { id } = await params;

  const getCar = await fetchCar(id);

  return (
    <div className={styles.featuresBlock}>
      <div className={styles.parameters}>
        <div className={styles.iconsBlock}>
          {features
            .filter(([key]) => Boolean(getCar[key as keyof typeof getCar]))
            .map(([key, icon]) => (
              <div className={styles.iconBlockItem} key={key}>
                <svg className={styles.pageDetailsIcon} width={20} height={20}>
                  <use href={`/symbol-defs.svg#${icon}`} />
                </svg>
                {key}
              </div>
            ))}
        </div>
        <div className={styles.vehicleDetails}>
          <h3 className={styles.vahicleDetailsTitle}>Vehicle details</h3>
          <div className={styles.vehicleDetailsInformation}>
            <span>Form</span>
            <span className={styles.vehicleDetailsFormValue}>
              {getCar.form}
            </span>
          </div>
          <div className={styles.vehicleDetailsInformation}>
            <span>Length</span>
            <span>{getCar.length}</span>
          </div>
          <div className={styles.vehicleDetailsInformation}>
            <span>Width</span>
            <span>{getCar.width}</span>
          </div>
          <div className={styles.vehicleDetailsInformation}>
            <span>Height</span>
            <span>{getCar.height}</span>
          </div>
          <div className={styles.vehicleDetailsInformation}>
            <span>Tank</span>
            <span>{getCar.tank}</span>
          </div>
          <div className={styles.vehicleDetailsInformation}>
            <span>Consumption</span>
            <span>{getCar.consumption}</span>
          </div>
        </div>
      </div>
      <div className={styles.formBlock}>
        <FormRegister carId={id} />
      </div>
    </div>
  );
}
