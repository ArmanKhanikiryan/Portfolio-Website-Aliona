import {FC} from 'react';
import { Helmet } from 'react-helmet';

const MyPage: FC = () => {
    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="This is the meta description for MyPage. Replace this with your actual description."
                />
            </Helmet>
        </div>
    );
};

export default MyPage;
