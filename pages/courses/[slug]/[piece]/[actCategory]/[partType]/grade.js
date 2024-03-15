import { useRouter } from "next/router";
import { useQuery } from 'react-query';
import { getRecentSubmissions } from '../../../../../../api';
import Layout from "../../../../../../components/layout";
import GradePerform from "../../../../../../components/teacher/grade/perform";

export default function GradeActivity() {
  const router = useRouter();
  const { slug, piece, partType } = router.query;
  
  // TODO: should't render this thing if not a teacher
  const { isLoading, error, data: submissions } = useQuery(['gradeableSubmissions', slug, piece, partType], getRecentSubmissions({ slug, piece, partType }))


  
  if (isLoading || !submissions) return 'Loading...'
  if (error) return `An error has occurred: ${  error.message}`
  
  return <Layout>
    <GradePerform submissions={submissions} />
  </Layout>
}