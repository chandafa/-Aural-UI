import { Thing, WithContext } from "schema-dts";

export function JsonLd<T extends Thing>({ json }: { json: WithContext<T> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
