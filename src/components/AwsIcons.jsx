export function AwsS3Icon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#E05243' }} aria-label="AWS S3">
      <path d="M12 2L3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.3l6.5 3.25L12 10.8 5.5 7.55 12 4.3zM5 9.4l6 3v7.3l-6-3V9.4zm8 10.3v-7.3l6-3v7.3l-6 3z" />
    </svg>
  );
}

export function AwsEc2Icon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF9900' }} aria-label="AWS EC2">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 17H5v-2h3v2zm0-4H5v-2h3v2zm0-4H5V7h3v2zm11 8h-9v-2h9v2zm0-4h-9v-2h9v2zm0-4h-9V7h9v2z" />
    </svg>
  );
}

export function AwsSqsIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF4F8B' }} aria-label="AWS SQS">
      <path d="M4 4h16v16H4V4zm3 3v10h10V7H7zm2 2h6v6H9V9z" />
    </svg>
  );
}

export function AwsSesIcon({ className = "w-14 h-14" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={{ color: '#DD344C' }} aria-label="AWS SES">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
