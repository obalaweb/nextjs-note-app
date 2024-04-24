import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  content: z.string(),
});

export default schema;
