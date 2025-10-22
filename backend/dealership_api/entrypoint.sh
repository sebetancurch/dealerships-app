#!/bin/sh
set -e

DB_PATH=${SQLITE_PATH:-/data/db.sqlite3}
APP_USER="django"

echo "📦 Using database at: $DB_PATH"

# Ensure /data exists and is writable
mkdir -p /data
chown -R $APP_USER:$APP_USER /data

# Run migrations every time (safe for SQLite)
echo "🛠️ Applying database migrations..."
python manage.py migrate --noinput

# Optional: Collect static files
echo "🎨 Collecting static files..."
python manage.py collectstatic --noinput || echo "⚠️ Failed to collect static files — continuing..."

echo "🚀 Starting application..."
exec "$@"
