import {
  ApolloClient,
  InMemoryCache,
  gql,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

export const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
  fetch: function (uri, options) {
    return fetch(uri, {
      ...options,
      next: {
        revalidate: 1,
      },
    });
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache({}),
  defaultOptions: {
    query: {
      fetchPolicy: "network-only",
    },
  },
});

/* QUERIES */

const GET_GENERAL = gql`
  query getGeneral {
    GeneralInformation {
      name
      logo {
        url
      }
      address
      hotline1
      hotline2
      emergencyHotline
      email
      operatingHours
      socials {
        name
        url
      }
      mapLat
      mapLong
      socials {
        name
        url
      }
    }
  }
`;

const GET_HEROES = gql`
  query getHeroes {
    SectionHero {
      homeHero {
        url
      }
      homeSlogan
      homeDescription
      aboutusHero {
        url
      }
      aboutUsSlogan
      aboutUsDescription
      teamHero {
        url
      }
      teamSlogan
      teamDescription
      departmentHero {
        url
      }
      departmentSlogan
      departmentDescription
      serviceHero {
        url
      }
      serviceSlogan
      serviceDescription
      blogHero {
        url
      }
      blogSlogan
      blogDescription
      reservationHero {
        url
      }
      reservationSlogan
      reservationDescription
      contactHero {
        url
      }
      contactSlogan
      contactDescription
      galleryHero {
        url
      }
      gallerySlogan
      galleryDescription
      # emergencyHero {
      #   url
      # }
      # emergencySlogan
      # emergencyDescription
    }
  }
`;

const GET_FAQS = gql`
  query getFAQs($limit: Int = 100, $page: Int = 1) {
    Faqs(limit: $limit, page: $page) {
      docs {
        id
        question
        answer
      }
      totalDocs
      totalPages
      page
      limit
      hasNextPage
      hasPrevPage
    }
  }
`;

// const GET_EMERGENCY = gql`
//   query getEmergencySection {
//     EmergencySection {
//       title
//       items {
//         value
//       }
//     }
//   }
// `;

const GET_ABOUT = gql`
  query getAbout {
    OurStory {
      content
    }
  }
`;

const GET_DPEARTMENTS = gql`
  query getDepartments($deptLimit: Int = 100, $staffPreviewLimit: Int = 100) {
    Departments(limit: $deptLimit) {
      docs {
        id
        slug
        title
        about
        icons {
          url
        }
        staffs(
          where: {
            status: { equals: Active }
            AND: { role: { equals: Doctor } }
          }
          limit: $staffPreviewLimit
        ) {
          docs {
            slug
          }
        }
      }
      totalDocs
      limit
    }
  }
`;

const GET_DEPARTMENT = gql`
  query getDepaertment($slug: String, $staffLimit: Int = 100) {
    Departments(where: { slug: { equals: $slug } }) {
      docs {
        slug
        heroImage {
          url
        }
        title
        about
        icons {
          url
        }
        phone
        email
        address
        hours

        staffs(where: { status: { equals: Active } }, limit: $staffLimit) {
          docs {
            specialty
            slug
            name
            role
            photo {
              url
            }
            years
            languages {
              value
            }

            schedule {
              day
              time
            }
          }
        }
        services {
          value
        }
        conditions {
          value
        }
      }
    }
  }
`;

const GET_SERVICES = gql`
  query getServices($limit: Int = 100, $page: Int = 1) {
    Services(limit: $limit, page: $page) {
      docs {
        id
        title
        desc
        prep
        icon {
          url
        }
        items {
          value
        }
      }
      totalDocs
      totalPages
      page
      limit
      hasNextPage
      hasPrevPage
    }
  }
`;

const GET_STAFFS = gql`
  query getStaffs($limit: Int = 100, $page: Int = 1) {
    Staffs(where: { status: { equals: Active } }, limit: $limit, page: $page) {
      docs {
        id
        slug
        name
        role
        specialty
        years
        languages {
          value
        }
        department {
          title
          slug
        }
        photo {
          url
        }
      }
      totalDocs
      totalPages
      page
      limit
      hasNextPage
      hasPrevPage
    }
  }
`;

const GET_STAFF = gql`
  query getStaff($slug: String) {
    Staffs(where: { slug: { equals: $slug } }) {
      docs {
        name
        role
        specialty
        bio
        years
        education {
          value
        }
        languages {
          value
        }
        department {
          title
          slug
        }
        schedule {
          day
          time
        }
        photo {
          url
        }
      }
    }
  }
`;

const GET_PATIENT = gql`
  query getPatient($phone: String) {
    Patients(where: { phone: { equals: $phone } }) {
      docs {
        id
        fullName
        phone
        email
      }
    }
  }
`;

// Adjusted: backend exposes single 'image' field (error indicated 'images' invalid)
const GET_GALLERIES = gql`
  query getGalleries($limit: Int = 100, $page: Int = 1) {
    Galleries(limit: $limit, page: $page) {
      docs {
        id
        title
        image {
          url
        }
      }
      totalDocs
      totalPages
      page
      limit
      hasNextPage
      hasPrevPage
    }
  }
`;

const GET_BLOGS = gql`
  # Added $sort variable with default "-publishedAt" for descending order by publication time.
  # If backend uses publishedDate instead, update the default to "-publishedDate" accordingly.
  query getBlogs(
    $limit: Int = 100
    $page: Int = 1
    $sort: String = "-publishedAt"
  ) {
    BlogPosts(
      limit: $limit
      page: $page
      sort: $sort
      where: { published: { equals: true } }
    ) {
      docs {
        id
        slug
        title
        excerpt
        content

        publishedAt
        author {
          name
          photo {
            url
          }
          role
        }
        coverImage {
          url
        }
        tags {
          value
        }
      }
      totalDocs
      totalPages
      page
      limit
      hasNextPage
      hasPrevPage
    }
  }
`;

const GET_BLOG = gql`
  query getBlog($slug: String) {
    BlogPosts(where: { slug: { equals: $slug } }) {
      docs {
        id
        slug
        title
        excerpt
        content

        publishedAt
        author {
          name
          photo {
            url
          }
          role
        }
        coverImage {
          url
        }
        tags {
          value
        }
      }
    }
  }
`;

/* MUTATION */

export const CREATE_PATIENT = gql`
  mutation CreatePatient(
    $fullName: String!
    $phone: String!
    $email: String
    # Backend expects an enum/input type; previously declared as String causing mismatch.
    $gender: Patient_gender_MutationInput
    $dob: String
    $address: String
  ) {
    createPatient(
      data: {
        fullName: $fullName
        phone: $phone
        email: $email
        gender: $gender
        dob: $dob
        address: $address
      }
    ) {
      id
      fullName
    }
  }
`;

const CREATE_MESSAGE = gql`
  mutation CreateMessage(
    $patient: String!
    $subject: String!
    $message: String!
    $handled: Boolean!
  ) {
    createContact(
      data: {
        patient: $patient
        subject: $subject
        message: $message
        handled: $handled
      }
    ) {
      subject
    }
  }
`;

const CREATE_RESERVATION = gql`
  mutation CreateReservation(
    $patient: String!
    $datetime: String!
    $symptoms: String!
    $department: String!
  ) {
    createReservation(
      data: {
        patient: $patient
        datetime: $datetime
        symptoms: $symptoms
        department: $department
      }
    ) {
      id
    }
  }
`;

export const getGeneral = async () => {
  const { data } = await client.query({
    query: GET_GENERAL,
  });
  return data;
};

export const getHeroes = async () => {
  const { data } = await client.query({
    query: GET_HEROES,
  });
  return data;
};

export const getFAQs = async (limit = 100, page = 1) => {
  const { data } = await client.query({
    query: GET_FAQS,
    variables: { limit, page },
  });
  return data;
};

export const getAbout = async () => {
  const { data } = await client.query({
    query: GET_ABOUT,
  });
  return data;
};

export const getDepartments = async (
  deptLimit = 100,
  staffPreviewLimit = 100
) => {
  const { data } = await client.query({
    query: GET_DPEARTMENTS,
    variables: { deptLimit, staffPreviewLimit },
  });
  return data;
};

export const getDepartment = async (slug: string, staffLimit = 100) => {
  const { data } = await client.query({
    query: GET_DEPARTMENT,
    variables: { slug, staffLimit },
  });
  return data;
};

export const getServices = async (limit = 100, page = 1) => {
  const { data } = await client.query({
    query: GET_SERVICES,
    variables: { limit, page },
  });
  return data;
};

export const getStaffs = async (limit = 100, page = 1) => {
  const { data } = await client.query({
    query: GET_STAFFS,
    variables: { limit, page },
  });
  return data;
};

export const getStaff = async (slug: string) => {
  const { data } = await client.query({
    query: GET_STAFF,
    variables: { slug },
  });
  return data;
};

export const getPatient = async (phone: string) => {
  const { data } = await client.query({
    query: GET_PATIENT,
    variables: { phone },
  });
  return data;
};

export const getGalleries = async (limit = 100, page = 1) => {
  const { data } = await client.query({
    query: GET_GALLERIES,
    variables: { limit, page },
  });
  return data;
};

export const getBlogs = async (
  limit = 100,
  page = 1,
  sort: string = "-publishedAt"
) => {
  const { data } = await client.query({
    query: GET_BLOGS,
    variables: { limit, page, sort },
  });
  return data;
};

export const getBlog = async (slug: string) => {
  const { data } = await client.query({
    query: GET_BLOG,
    variables: { slug },
  });
  return data;
};

/* END OF QUERIES */

/* MUTATIONS */

export const createPatient = async (
  fullName: string,
  phone: string,
  email?: string,
  gender?: string, // Should align with Patient_gender_MutationInput enum values
  dob?: string,
  address?: string
) => {
  const { data } = await client.mutate({
    mutation: CREATE_PATIENT,
    variables: { fullName, phone, email, gender, dob, address },
  });
  return data;
};

export const createMessage = async (
  patient: string,
  subject: string,
  message: string
) => {
  const { data } = await client.mutate({
    mutation: CREATE_MESSAGE,
    variables: { patient, subject, message, handled: false },
  });
  return data;
};

export const createReservation = async (
  patient: string,
  datetime: string,
  symptoms: string,
  department: string
) => {
  const { data } = await client.mutate({
    mutation: CREATE_RESERVATION,
    variables: {
      patient,
      datetime,
      symptoms,
      department,
      status: "pending",
    },
  });
  return data;
};

/* END OF MUTATIONS */
