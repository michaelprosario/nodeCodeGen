

### Make sure we can support the following data formats for Json schema.

In JSON Schema, the following formats are valid:

date-time: A string instance is valid against this attribute if it is a valid representation according to the "date-time" production in RFC 3339.

date: A string instance is valid against this attribute if it is a valid representation according to the "full-date" production in RFC 3339.

time: A string instance is valid against this attribute if it is a valid representation according to the "full-time" production in RFC 3339.

email: A string instance is valid against this attribute if it is a valid Internet email address as defined by RFC 5322, Section 3.4.1.

idn-email: A string instance is valid against this attribute if it is a valid Internationalized email address as defined by RFC 6531.

hostname: A string instance is valid against this attribute if it is a valid representation for an Internet host name, as defined by RFC 1034, Section 3.1.

idn-hostname: A string instance is valid against this attribute if it is a valid Internationalized hostname as defined by RFC 5890.

ipv4: A string instance is valid against this attribute if it is a valid IPv4 address according to the "dotted-quad" ABNF syntax as defined in RFC 2673, Section 3.2.

ipv6: A string instance is valid against this attribute if it is a valid IPv6 address as defined in RFC 4291, Section 2.2.

uri: A string instance is valid against this attribute if it is a valid URI, according to RFC3986.

uri-reference: A string instance is valid against this attribute if it is a valid URI Reference (either a URI or a relative-reference), according to RFC3986.

iri: A string instance is valid against this attribute if it is a valid IRI, according to RFC3987.

iri-reference: A string instance is valid against this attribute if it is a valid IRI Reference (either an IRI or a relative-reference), according to RFC3987.

uuid: A string instance is valid against this attribute if it is a valid UUID according to RFC4122.

regex: A string instance is valid against this attribute if it is a valid regular expression, according to the ECMA 262 regular expression dialect.