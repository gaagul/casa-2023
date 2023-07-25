import { useQuery } from "@tanstack/react-query";
import { fetchAllProperties, fetchPropertyById, fetchApprovedProperties, fetchFeaturedProperties } from "../apis/properties";

const STALE_TIME = 100_000;
const QUERY_KEYS = {
  PROPERTIES_LIST: "propertiesList",
  PROPERTY_BY_ID: "propertyById",
  APPROVED_PROPERTIES: "approvedProperties",
  FEATURED_PROPERTIES: "featuredProperties"
};

const useFetchProperties = () =>
  useQuery([QUERY_KEYS.PROPERTIES_LIST], fetchAllProperties, {
    select: data =>
      data?.docs.map(doc => ({ ...doc.data(), id: doc.id, key: doc.id })),
    staleTime: STALE_TIME,
  });

const useFetchPropertyById = id =>
  useQuery([QUERY_KEYS.PROPERTY_BY_ID], () => fetchPropertyById(id));

const useFetchApprovedProperties = () => 
  useQuery([QUERY_KEYS.APPROVED_PROPERTIES], fetchApprovedProperties, {
  select: data =>
      data?.docs.map(doc => ({ ...doc.data(), id: doc.id, key: doc.id })),
    staleTime: STALE_TIME,
  })

const useFetchFeaturedAssets = () => 
  useQuery([QUERY_KEYS.FEATURED_PROPERTIES], fetchFeaturedProperties, {
  select: data =>
      data?.docs.map(doc => ({ ...doc.data(), id: doc.id, key: doc.id })),
    staleTime: STALE_TIME,
  })

export { useFetchProperties, useFetchPropertyById, useFetchApprovedProperties, useFetchFeaturedAssets };
