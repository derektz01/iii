// Interfaces based on API response structure
interface Department {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  code: string;
  sortOrder: number | null;
}

interface Attachment {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null; // Could be object if images are involved
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface AudienceType {
  id: number;
  documentId: string;
  name: string;
  description: string;
  code: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  sortOrder: number | null;
}

interface Policy {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  content: string | null;
  release: string;
  sortOrder: number | null;
  department: Department;
  attachment: Attachment[] | null;
  audience_types: AudienceType[];
}

interface ApiResponse {
  data: Policy[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// API base URL and token (move to .env or secure config in production)


/**
 * Fetches policies dynamically from the API, replacing mock data.
 * @returns Promise<Policy[]> - Array of policyes
 */

export async function fetchPolicies(page = 1, pageSize = 25): Promise<{ data: Policy[], meta: ApiResponse['meta'] }> {
  try {
    const url = `${import.meta.env.VITE_API_BASE_URL}/api/regulations?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort[0]=release:desc`;
    const response = await fetch(url , {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const json: ApiResponse = await response.json();
    return { data: json.data, meta: json.meta } // Return the array of policies
  } catch (error) {
    console.error('Error fetching policies:', error);
    return {
      data: [],
      meta: {
        pagination: {
          page: 1,
          pageSize: 25,
          pageCount: 0,
          total: 0,
        },
      },
    }; // Fallback to empty object with default meta
  }
}

// If needed, add similar functions for other sections (e.g., fetchDepartments)