import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../app/components/ui/card';
import type { Feature } from '../../types';

interface FeatureCardProps extends Feature {
  linkTo?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  linkTo = '/products',
  className = '' 
}) => {
  return (
    <Card className={`border-gray-200 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <CardHeader>
        <div className=\"w-12 h-12 bg-gradient-to-br from-[#002E6E] to-[#00B9F1] rounded-lg flex items-center justify-center mb-4\">
          <Icon className=\"h-6 w-6 text-white\" aria-hidden=\"true\" />
        </div>\n        <CardTitle className=\"text-xl\">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className=\"text-gray-600 mb-4\">
          {description}
        </CardDescription>
        <Link 
          to={linkTo}
          className=\"inline-flex items-center text-[#002E6E] hover:text-[#001f4d] transition-colors\"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <ArrowRight className=\"ml-1 h-4 w-4\" aria-hidden=\"true\" />
        </Link>
      </CardContent>
    </Card>
  );
};