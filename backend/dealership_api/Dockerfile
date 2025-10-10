FROM python:3.13-alpine

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies (needed for common Python packages)
RUN apk add --no-cache \
    gcc \
    musl-dev \
    libffi-dev \
    postgresql-dev \
    zlib-dev \
    jpeg-dev

# Install Python dependencies
COPY requirements.txt /app
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files
COPY dealership_api /app/dealership_api
COPY dealership_app /app/dealership_app
COPY entrypoint.sh /app/
COPY manage.py /app/

# Add a non-root user
RUN adduser -D django
# Entrypoint script
RUN chmod +x /app/entrypoint.sh
RUN mkdir -p /data && chown -R django:django /data
USER django
ENTRYPOINT ["/app/entrypoint.sh"]

# Expose port
EXPOSE 8000

# For production use:
CMD ["gunicorn", "dealership_api.wsgi:application", "--bind", "0.0.0.0:8000"]
