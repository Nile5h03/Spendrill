/* eslint-disable no-undef */
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // Ensure './schema' matches the file name exactly

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql, { schema }); // Ensure 'db' is exported
