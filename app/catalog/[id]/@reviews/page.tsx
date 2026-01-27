import FormRegister from '@/components/FormRegister/FormRegister';
import styles from './pageReviews.module.css';
import { fetchCar } from '@/lib/api/queries';
import { Rating } from '@/components/Rating/Rating';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ReviewsPage({ params }: PageProps) {
  const { id } = await params;
  const getCar = await fetchCar(id);
  return (
    <div className={styles.reviewsBlock}>
      <div className={styles.reviews}>
        <div>
          <div>
            {getCar.reviews.map((review, index) => (
              <div key={index}>
                <div className={styles.logoNameBlock}>
                  <div className={styles.logo}>
                    <span>{review.reviewer_name?.trim().charAt(0)}</span>
                  </div>
                  <div>
                    <p>{review.reviewer_name}</p>
                    <Rating value={review.reviewer_rating} />
                  </div>
                </div>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
          <p></p>
        </div>
      </div>
      <div className={styles.formBlock}>
        <FormRegister carId={id} />
      </div>
    </div>
  );
}
