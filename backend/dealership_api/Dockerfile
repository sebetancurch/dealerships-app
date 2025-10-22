FROM python:3.13-alpine

# Environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apk add --no-cache \
    gcc \
    musl-dev \
    libffi-dev \
    zlib-dev \
    jpeg-dev

# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files
COPY dealership_api /app/dealership_api
COPY dealership_app /app/dealership_app
COPY manage.py /app/
COPY entrypoint.sh /app/

# Add non-root user and setup storage
RUN adduser -D django \
    && mkdir -p /data \
    && chown -R django:django /app /data

RUN mkdir -p /app/staticfiles && chown -R django:django /app/staticfiles

USER django

# Entrypoint script (for migrations, etc.)
RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

# Expose port
EXPOSE 8000

# Default command
CMD ["gunicorn", "dealership_api.wsgi:application", "--bind", "0.0.0.0:8000"]
