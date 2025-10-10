#!/bin/sh
set -e

DB_PATH=${SQLITE_PATH:-/data/db.sqlite3}

echo "📦 Using database at: $DB_PATH"

# Make migrations (safe even if no changes)
python manage.py makemigrations --noinput || true

if [ ! -f "$DB_PATH" ]; then
  echo "🆕 No existing database found — applying migrations..."
  python manage.py migrate --noinput
else
  echo "✅ Existing database detected — skipping migration to avoid duplicate tables."
  python manage.py migrate --fake --noinput || true
fi

echo "🚀 Starting application..."
exec "$@"
