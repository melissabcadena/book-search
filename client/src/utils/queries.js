import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me{
            _id
            username
            email
            savedBooks{
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
`;