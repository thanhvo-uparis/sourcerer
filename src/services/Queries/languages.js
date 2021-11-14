import { gql } from '@apollo/client';

export const GET_LANG = gql`
    query {
        viewer {
            repository(name: "sourcerer") {
                languages(first: 10) {
                    totalCount
                    totalSize
                    edges {
                        size
                        node {
                            name
                            color
                            id
                        }
                    }
                }
            }
        }
    }
`;
